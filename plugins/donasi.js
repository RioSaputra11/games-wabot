let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082119094904]
│ • Telkomsel [08219094904]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Comming soon
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
