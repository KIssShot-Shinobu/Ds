let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ 
╰────
╭─「 Hubungi 」
│ > Ingin donasi?
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
