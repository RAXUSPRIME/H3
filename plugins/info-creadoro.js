import fs from 'fs'
function handler(m, { conn }) {
let text = `
*๐พ๐ค๐ฃ๐ฉ๐๐๐ฉ๐ค | ๐พ๐ค๐ฃ๐ฉ๐๐๐ฉ* 
*Wa.me/32460212670 (CREADOR)
*Wa.me/32460242838 (BOT)*
*Wa.me/32460242838 (BOT)*
*โออกโฃPUTO BOTโออกโฃ*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'โออกโฃPUTO BOTโออกโฃ|MCA ',
body: '๐๐ซ๐๐๐๐จ๐ซo| ๐๐ซ๐๐๐ญ๐จ๐ซ',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/32460212670`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `๐งก *Eso son los contactos para ti.*\n๐ *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/', '๐๐ซ๐ฎ๐ฉ๐จ ๐๐ ๐๐๐๐๐๐จ๐จ๐ค:', null, null, [
['โโโ๐ฐ๐ต๐ญ๐ถ๐น๐ด๐จ๐ช๐ฐร๐ต๐ฉ๐ถ๐ปโโโฆ๏ธ', '.infobot'],
['โออกโฃ๐๐ซ๐ถ๐ต๐จ๐น๐โออกโฃ', '.donar'],
['๐ฅ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ๐๏ธโโชอก๊ฆฝ', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueรฑa|dueรฑo|propietaria|dueรฑo|creadora|creador)$/i
export default handler
