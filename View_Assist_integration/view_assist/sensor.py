from homeassistant.helpers.entity import Entity
from .const import DOMAIN

async def async_setup_entry(hass, config_entry, async_add_entities):
    """Set up sensors from a config entry."""
    sensors = [ViewAssistSensor(config_entry.data)]
    async_add_entities(sensors)

class ViewAssistSensor(Entity):
    """Representation of a View Assist Sensor."""

    def __init__(self, config):
        """Initialize the sensor."""
        self._name = config["name"]
        self._type = config["type"]
        self._mic_device = config["mic_device"]
        self._mediaplayer_device = config["mediaplayer_device"]
        self._musicplayer_device = config["musicplayer_device"]
        self._display_device = config["display_device"]
        self._browser_id = config.get("browser_id", "")

        self._attributes = {
            "type": self._type,
            "mic_device": self._mic_device,
            "mediaplayer_device": self._mediaplayer_device,
            "musicplayer_device": self._musicplayer_device,
            "display_device": self._display_device,
            "browser_id": self._browser_id,
        }

    @property
    def name(self):
        """Return the name of the sensor."""
        return self._name

    @property
    def state(self):
        """Return the state of the sensor."""
        return ""

    @property
    def extra_state_attributes(self):
        """Return the state attributes."""
        return self._attributes

