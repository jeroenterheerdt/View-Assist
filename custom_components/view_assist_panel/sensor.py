"""Platform for View Assist Panel integration."""

from homeassistant.helpers.entity import Entity


def setup_platform(hass, config, add_entities, discovery_info=None):
    """Set up the sensor platform."""
    add_entities([ViewAssistPanelSensor()])


class ViewAssistPanelSensor(Entity):
    """Representation of a Sensor."""

    def __init__(self):
        """Initialize the sensor."""
        self._state = None

    @property
    def name(self):
        """Return the name of the sensor."""
        return "View Assist Panel Sensor"

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    def update(self):
        """Fetch new state data for the sensor."""
        # This is where you'd fetch the new data
        self._state = "on"
