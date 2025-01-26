"""The View Assist Panel integration."""

from __future__ import annotations

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.discovery import async_load_platform
from .const import DOMAIN
from .panel import async_register_panel, async_unregister_panel

PLATFORMS: list[Platform] = [Platform.SENSOR]

type ViewAssistConfigEntry = ConfigEntry[0]  # noqa: F821


async def async_setup_entry(hass: HomeAssistant, entry: ViewAssistConfigEntry) -> bool:
    """Set up View Assist Panel from a config entry."""

    await async_load_platform(hass, "sensor", DOMAIN, {}, entry)
    await async_register_panel(hass, entry)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ViewAssistConfigEntry) -> bool:
    """Unload a config entry."""
    await async_unregister_panel(hass, entry)
    return await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
