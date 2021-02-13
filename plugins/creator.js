let handler = function (m) {
  // this.sendContact(m.chat, '6281515680656', 'Oshino Shinobu', m)
  this.sendContact(m.chat, '6281515680656', 'Admin DrawlNag', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['']

handler.command = /^(owner|creator)$/i

module.exports = handler
