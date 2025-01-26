"""View Assist Panel Integration."""

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant

from .const import DOMAIN

# panel work
from .panel import async_register_panel, async_unregister_panel

_LOGGER = logging.getLogger(__name__)

PLATFORMS: list[Platform] = [Platform.SENSOR]


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Set up View Assist Panel from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    # Request platform setup
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    # Register the panel (frontend)
    await async_register_panel(hass)
    #####

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Unload a config entry."""
    if unloaded := await hass.config_entries.async_forward_entry_unload(
        entry, PLATFORMS
    ):
        hass.data[DOMAIN].pop(entry.entry_id)

    async_unregister_panel(hass)
    return unloaded


async def async_remove_entry(hass: HomeAssistant, entry):
    """Remove Smart Irrigation config entry."""
    async_unregister_panel(hass)
    if DOMAIN in hass.data:
        if "coordinator" in hass.data[DOMAIN]:
            coordinator = hass.data[DOMAIN]["coordinator"]
            await coordinator.async_delete_config()
        del hass.data[DOMAIN]
