var Discord = require('discord.js');
const client = new Discord.Client()
const prefix = ("/")

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	const querystring = require('querystring');

	if (command === 'urban') {
	if (!args.length) {
		return message.channel.send('You need to supply a search term!');
	}

		const query = querystring.stringify({ term: args.join(' ') });

	const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
	message.channel.send(list[0].definition);
	}
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
	if (command === 'pracownicy') {
		const { nickname } = await fetch('http://mathelusz.ct8.pl/lsrp/api.php').then(response => response.json());
		message.channel.send(garage[0].nickname);
}
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
	if (command === 'kot') {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
}
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
	if (command === 'pies') {
		const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
		message.channel.send(url);
}
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
	if (command === 'test') {
		const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
		message.channel.send(message);
}
});

client.on('message', message => {
    if (message.content === '/awatar') {
      let embed = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setColor('#275BF0')
      message.channel.send(embed)
    }
});

client.on('message', message => {
  if (message.content === 'gowno') {
    message.channel.send("smacznego");
  }
});

client.on('message', message => {
  if (message.content === 'dobrze') {
    message.channel.send("to super!");
  }
});
client.on('message', message => {
  if (message.content === 'no') {
    message.channel.send("noo");
  }
});
client.on('message', message => {
  if (message.content === 'XD') {
    message.channel.send("XDDDDD");
  }
});
client.on('message', message => {
  if (message.content === 'spierdalaj') {
    message.channel.send("bo");
  }
});
client.on('message', message => {
  if (message.content === 'czeesc <@510094801052631040>') {
    message.channel.send("no hej, " + message.author + " jak leci?");
  }
});
client.on('message', message => {
  if (message.content === 'dobranoc <@510094801052631040>') {
    message.channel.send("dobranoc " + message.author + " miłych snów!!");
  }
});
client.on('message', message => {
  if (message.content === 'dziendobry <@510094801052631040>') {
    message.channel.send("dzień dobry " + message.author + " udanego dnia!!");
  }
});
client.on('message', message => {
  if (message.content === 'daj nudeska <@510094801052631040>') {
    message.channel.send("zboczuchu ty, wczoraj ci wyslalam :suck:");
  }
});
client.on('message', message => {
  if (message.content === 'cwel') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'karren') {
    message.channel.send('KarreN? chyba KaeN . . .  ');
  }
});
client.on('message', message => {
  if(message.content == "/test")
    message.member.setDeaf(true, "reason");
	
});
client.on('message', message => {
  if (message.content === 'Karren') {
    message.channel.send('KarreN? chyba KaeN . . .  ');
  }
});
client.on('message', message => {
  if (message.content === 'kc') {
    message.channel.send('tkc :heart:');
  }
});
client.on('message', message => {
  if (message.content === 'co tam') {
    message.channel.send('dobrze, a tam?');
  }
});
client.on('message', message => {
  if (message.content === 'twuj stary') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'kretyn') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'idiota') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'pajac') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'debil jebany') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'debil') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'chuj') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'pizda') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'elo') {
    message.channel.send('```c h e j   m i s i u```');
  }
});
								      
client.on('message', message => {
    if (message.content === 'slodziak') {
      let embed = new Discord.RichEmbed()
    .setURL('https://i.imgur.com/9iXDVu4.mp4')
    .setColor('#275BF0')
      message.channel.send();
    }
});
client.on('message', message => {
  if (message.content === 'emiltoja') {
    message.channel.send(':heart: emilek :heart:');
  }
});

client.on('ready', () => {
    client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: 'emiltounban',
            type: 0
        }
    });
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "emil")) {
	message.channel.send({embed: {
    color: 990099,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "emil",
        value: "najukochanszy, najslodszy misiek :heart::heart::heart::heart::heart::heart::heart: \njesli myslisz ze jest inaczej, to zle myslisz gupku"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© bot by emiltoja"
    }
  }
});
  }
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "karren")) {
	message.channel.send({embed: {
    color: 990099,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "karren",
        value: "nie jest gupia i tepa, jest madra i slodka :heart::heart::heart::heart::heart::heart::heart: \njesli myslisz ze jest inaczej, to zle myslisz gupku"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© bot by emiltoja"
    }
  }
});
  }
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "helios")) {
	message.channel.send({embed: {
    color: 990099,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "helios",
        value: "SEX"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© bot by emiltoja"
    }
  }
});
  }
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "")) {
	message.channel.send({embed: {
    color: 990099,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "najwiekszy slodziak(oprocz karren)",
        value: ""
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© bot by emiltoja"
    }
  }
});
  }
});


client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "pomoc")) {
	message.channel.send({embed: {
    color: 696969,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "dostepne komendy",
        value: "/patryk, /karren, /emil, /szmusi, /purge, /kick, /ban"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© bot by emiltoja"
    }
  }
});
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
