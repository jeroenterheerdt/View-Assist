from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from .const import DOMAIN

PLATFORMS: list[Platform] = [Platform.SENSOR]

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Set up View Assist from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    # Request platform setup
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Unload a config entry."""
    if unloaded := await hass.config_entries.async_forward_entry_unload(entry, PLATFORMS):
        hass.data[DOMAIN].pop(entry.entry_id)
    return unloaded