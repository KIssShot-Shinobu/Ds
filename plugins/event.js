let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
event yang sedang berlangsung di duel stanby! :

1. Liga internal season 2 :
  Minggu, 31 Januari 2021 
  20:20 WIB 
  7 Complicated vs Domino

  Phobos vs Shadow Slaye


2. KOG rush : Senin 01 Feburari 2021 
    Max 6 jam   08:00 - 14:00 WIB 
    By: Wewin/Kaisar

`.trim(), m)
}
handler.help = ['event']
handler.tags = ['tools']
handler.command = /^(event)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.limit = true
handler.fail = null

module.exports = handler

