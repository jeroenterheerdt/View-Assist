from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import Entity
from homeassistant.helpers.entity import DeviceInfo
import homeassistant.helpers.device_registry as dr
from .const import DOMAIN


async def async_setup(hass: HomeAssistant, config: dict):
    """Set up the View Assist integration from YAML (if any)."""
    hass.data.setdefault(DOMAIN, {})
    return True

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Set up View Assist from a config entry."""
    hass.data.setdefault(DOMAIN, {})

    # Create and register the sensor entity
    sensor = ViewAssistSensor(hass, entry)
    hass.data[DOMAIN][entry.entry_id] = sensor

    # Add the entity to Home Assistant
    await hass.config_entries.async_forward_entry_setups(entry, ["sensor"])

    # Listen for option updates
    entry.add_update_listener(async_update_options)

    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Unload a config entry."""
    hass.data[DOMAIN].pop(entry.entry_id)
    return await hass.config_entries.async_forward_entry_unload(entry, "sensor")

async def async_update_options(hass: HomeAssistant, entry: ConfigEntry):
    """Handle options updates."""
    sensor = hass.data[DOMAIN][entry.entry_id]
    sensor.update_attributes(entry.options)
    sensor.async_write_ha_state()


class ViewAssistSensor(Entity):
    """Representation of a View Assist sensor."""

    def __init__(self, hass, entry: ConfigEntry):
        self._hass = hass
        self._entry = entry
        self._name = entry.data["name"]
        self._attr_unique_id = f"{self._attr_name}_vasensor"
        self._attributes = {
            "type": entry.data.get("type", "view_audio"),
            "mic_device": entry.data.get("mic_device", ""),
            "mediaplayer_device": entry.data.get("mediaplayer_device", ""),
            "musicplayer_device": entry.data.get("musicplayer_device", ""),
            "display_device": entry.data.get("display_device", ""),
            "browser_id": entry.data.get("browser_id", ""),
        }
        self._state = "active"
        self._icon = "mdi:glasses"  # Set the icon for the sensor
        
        self._attr_device_info = DeviceInfo(
                    identifiers={(DOMAIN, self._attr_name)},
                    manufacturer="View Assist",
                    name=self._attr_name,
                    entry_type=dr.DeviceEntryType.SERVICE,
                    sw_version="0.0.0"
                )
    @property
    def name(self):
        return self._name

    @property
    def state(self):
        return self._state

    @property
    def extra_state_attributes(self):
        return self._attributes

    @property
    def icon(self):
        """Return the icon for the sensor."""
        return self._icon

    @property
    def unique_id(self):
        """Return the unique ID of the sensor."""
        return self._unique_id

    @property
    def should_poll(self):
        return False

    def update_attributes(self, updated_data):
        """Update the attributes based on new options."""
        self._attributes.update(updated_data)