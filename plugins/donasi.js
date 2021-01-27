let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • IM3 [081515680656]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281515680656
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
