{
    'name': 'Oris Custom Function Override',
    'version': '1.0',
    'summary': 'Override specific functions in Odoo.',
    'category': 'Tools',
    'author': 'Pham Huy Quyen',
    'website': 'https://orissolutions.vn',
    'depends': ['web'],
    'data': [
    ],
    'assets': {
        'web.assets_backend': [
            'oris_menu_addon/static/src/js/function_override.js',
        ],
    },
    'license': 'LGPL-3',
    'installable': True,
    'application': True,
}
