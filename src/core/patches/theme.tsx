import { Theme, Dispatcher } from '@metro/common';
import { getByProps } from '@metro';

const { overrideTheme } = getByProps("updateTheme", "overrideTheme");
const { setAMOLEDThemeEnabled } = getByProps("setAMOLEDThemeEnabled");
const { useAMOLEDTheme } = getByProps("useAMOLEDTheme");

export default () => {
    const event = function() {
        overrideTheme(Theme?.theme ?? "dark");
        setAMOLEDThemeEnabled && useAMOLEDTheme === 2 && setAMOLEDThemeEnabled(true);
        Dispatcher.unsubscribe("I18N_LOAD_SUCCESS", event);
    };

    Dispatcher.subscribe("I18N_LOAD_SUCCESS", event);
};