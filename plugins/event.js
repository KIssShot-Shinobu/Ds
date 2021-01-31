let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
event yang sedang berlangsung di duel stanby! :

1. Liga internal season 2 :
  Minggu, 31 Januari 2021 
  20:20 WIB 
  7 Complicated vs Domino

  Phobos vs Shadow Slaye


2. KOG Rush Februari 2021
1️⃣Deadline tgl 1 Februari 2021. Jam 14.00 WIB. (Batas Max 6 jam). 
Reward 100k dari Wewin. 
2️⃣KOG di tgl 28 Februari 2021. Dapat pulsa 10k dari Adhi P. 
3️⃣KOG + DLV Max tercepat. Reward paket data dari [DS] Kuroko.

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

