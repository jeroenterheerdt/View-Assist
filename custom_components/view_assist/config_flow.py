import voluptuous as vol
from homeassistant import config_entries
from homeassistant.helpers import selector
from .const import DOMAIN

class ViewAssistConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for View Assist."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        if user_input is not None:
            # Create a configuration entry
            return self.async_create_entry(title=user_input["name"], data=user_input)

        # Show the form for user input
        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(
                {
                    vol.Required("name"): str,
                    vol.Required("type", default="view_audio"): selector.SelectSelector(
                        selector.SelectSelectorConfig(
                            options=["view_audio", "audio_only"],
                            mode="dropdown",
                        )
                    ),
                    vol.Required("mic_device"): selector.EntitySelector(
                        selector.EntitySelectorConfig(domain=["sensor", "assist_satellite"])
                    ),
                    vol.Required("mediaplayer_device"): selector.EntitySelector(
                        selector.EntitySelectorConfig(domain="media_player")
                    ),
                    vol.Required("musicplayer_device"): selector.EntitySelector(
                        selector.EntitySelectorConfig(domain="media_player")
                    ),
                    vol.Required("display_device"): selector.EntitySelector(
                        selector.EntitySelectorConfig(domain="sensor")
                    ),
                    vol.Optional("browser_id"): str,
                }
            ),
        )