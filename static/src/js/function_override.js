/** @odoo-module **/

import { registry } from '@web/core/registry';
import { UserMenu } from '@web/webclient/user_menu/user_menu';
import { patch } from '@web/core/utils/patch';
import { browser } from '@web/core/browser/browser';

patch(UserMenu.prototype, 'custom_menu.menu_modifications', {
    setup() {
        this._super(...arguments);
        const userMenuRegistry = registry.category('user_menuitems');
        userMenuRegistry.get('documentation');
        userMenuRegistry.remove('documentation');
        userMenuRegistry.get('support');
        userMenuRegistry.remove('support');
        userMenuRegistry.get('odoo_account') ;
        userMenuRegistry.remove('odoo_account');
        
    },
});


function newDocumentationItem(env) {
 
    return {
        type: 'item',
        id: 'documentation',
        description: env._t('Documentation'),
        callback: () => {
            browser.open('https://docs.orissolutions.vn', '_blank');
        },
        sequence: 10,
    };
}

function newSupportItem(env) {
    return {
        type: 'item',
        id: 'support',
        description: env._t('Support'),
        callback: () => {
            browser.open('https://support.orissolutions.vn', '_blank');
        },
        sequence: 10,
    };
}

registry.category('user_menuitems')
.add('documentations', newDocumentationItem)
.add('supports', newSupportItem)
;
