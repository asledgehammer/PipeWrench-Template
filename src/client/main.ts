import * as Zomboid from 'Zomboid'; // Zomboid API.
import * as Events from 'Events';   // Events API.

// (Our greet function from greeter.ts)
import { ISUIElement, ISPanel } from 'ISUI';

Events.onGameStart.addListener(() => {

    print('--#--');
    print(ISUIElement);
    print(ISPanel);

    const panel = ISPanel.new(256, 256, 256, 256);
    panel.initialise();
    panel.instantiate();
    panel.addToUIManager();
    panel.setVisible(true);

    const element = ISUIElement.new(512, 256, 256, 256);
    element.render = () => {
        element.drawRect(512, 256, 256, 256, 1, 1.0, 0.0, 0.0);
    };
    element.initialise();
    element.instantiate();
    element.addToUIManager();
    element.setVisible(true);
});
