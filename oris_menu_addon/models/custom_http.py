from odoo import models, http
import json
import hashlib

class IrHttp(models.AbstractModel):
    _inherit = 'ir.http'

    
    def session_info(self):
        
        session_info = super(IrHttp, self).session_info()

        session_info['support_url'] = "https://support.orissolutions.vn"

        return session_info
