/** @odoo-module **/

import { registry } from '@web/core/registry';
import { UserMenu } from '@web/webclient/user_menu/user_menu';
import { patch } from '@web/core/utils/patch';
import { browser } from '@web/core/browser/browser';

// Xóa mục menu 'documentation'
patch(UserMenu.prototype, 'custom_menu.menu_modifications', {
    setup() {
        this._super(...arguments);
        const userMenuRegistry = registry.category('user_menuitems');
        if (userMenuRegistry.get('documentation')) {
            userMenuRegistry.remove('documentation');
        }
        if (userMenuRegistry.get('odoo_account')) {
            userMenuRegistry.remove('odoo_account');
        }
    },
});

// Thay thế mục menu 'documentation'
function newDocumentationItem(env) {
    const documentationURL = 'https://docs.orissolutions.vn'; // URL tài liệu mới
    return {
        type: 'item',
        id: 'documentation',
        description: env._t('Documentation'),
        href: documentationURL,
        callback: () => {
            browser.open(documentationURL, '_blank');
        },
        sequence: 10,
    };
}

// Thêm mục menu mới
registry.category('user_menuitems').add('documentations', newDocumentationItem);
