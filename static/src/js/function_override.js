

import { registry } from '@web/core/registry';
import { UserMenu } from '@web/webclient/user_menu/user_menu';
import { patch } from '@web/core/utils/patch';
import { browser } from '@web/core/browser/browser';
import { _lt } from "@web/core/l10n/translation";



patch(UserMenu.prototype, {
    setup() {

        super.setup(...arguments);

        const userMenuRegistry = registry.category('user_menuitems');
        if (userMenuRegistry.get('documentation')) {
            userMenuRegistry.remove('documentation');
        }
        if (userMenuRegistry.get('support')) {
            userMenuRegistry.remove('support');
        }
        if (userMenuRegistry.get('odoo_account')) {
            userMenuRegistry.remove('odoo_account');
        }
       
        
    },
});


function newDocumentationItem(env) {
    
    const documentationURL = 'https://docs.orissolutions.vn'; 
    return {
        type: 'item',
        id: 'documentation',
        description: 'Documentation',
        href: documentationURL,
        callback: () => {
            browser.open(documentationURL, '_blank');
        },
        sequence: 10,
    };
}
function newSupportItem(env) {
    
    const documentationURL = 'https://support.orissolutions.vn';
    return {
        type: 'item',
        id: 'documentation',
        description: 'Support',
        href: documentationURL,
        callback: () => {
            browser.open(documentationURL, '_blank');
        },
        sequence: 10,
    };
}

registry
.category('user_menuitems')
.add('documentations', newDocumentationItem)
.add('supports', newSupportItem);


