from homeassistant.components.sensor import SensorEntity
from .const import DOMAIN

async def async_setup_entry(hass, config_entry, async_add_entities):
    """Set up sensors from a config entry."""
    sensors = [ViewAssistSensor(config_entry.data)]
    async_add_entities(sensors)

class ViewAssistSensor(SensorEntity):
    """Representation of a View Assist Sensor."""

    _attr_should_poll = False

    def __init__(self, config):
        """Initialize the sensor."""
        self._attr_name = config["name"]
        self._type = config["type"]
        self._attr_unique_id = f"{self._attr_name}_vasensor"
        self._mic_device = config["mic_device"]
        self._mediaplayer_device = config["mediaplayer_device"]
        self._musicplayer_device = config["musicplayer_device"]
        self._display_device = config["display_device"]
        self._browser_id = config.get("browser_id", "")
        self._attr_native_value = ""
        self._attr_extra_state_attributes = {
            "type": self._type,
            "mic_device": self._mic_device,
            "mediaplayer_device": self._mediaplayer_device,
            "musicplayer_device": self._musicplayer_device,
            "display_device": self._display_device,
            "browser_id": self._browser_id,
        }

    @property
    def icon(self):
        """Return the icon of the sensor."""
        return "mdi:glasses"        