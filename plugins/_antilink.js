let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('El antilink estΓ‘ activo')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `γ ππππ πππππ γ\nEnlace de WhatsApp detectado, ${await this.getName(m.sender)} a la puta calle, gilipollas..!!${isBotAdmin ? '' : '\n\n*[βππππβ] π΄l bot no es admin, no puede eliminar a nadie...*'}`, author, ['π³esactivar Antilink', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('[βππππβ] π΄l propietario del bot no ha habilitado las restricciones (#ππππππ ππππππππ) π²ontacta con Γ©l y dΓ­selo*')
}
return !0
}
