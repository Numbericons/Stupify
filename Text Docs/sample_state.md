{
  entities: {
    songs: {
      1: {
        id: 1,
        title: "Los mosquitos",
        albumId: 5,
      },
      2: {
        id: 2,
        title: "Pez Volador",
        albumId: 5,
      },
      3: {
        id: 3,
        title: "Red Beans and Rice",
        albumId: 15,
      }
    },
    albums: {
      1: {
        id: 1,
        name: "Luzia",
        artistId: 13,
      },
      2: {
        id: 2,
        name: "Home",
        artistId: 5,
      }
    },
    artists: {
      1: {
        id: 3,
        name: "Spearhead",
        artistId: 5,
      },
      2: {
        id: 2,
        title: "Cirque du Soleil",
        artistId: 13,
      }
    },
    playlists: {
      1: {
        id: 1,
        name: "Insect Mix",
        ownerID: 11,
      },
      2: {
        id: 2,
        name: "Food Mix",
        ownerID: 11,
      },
      3: {
        id: 3,
        name: "Bug Food",
        ownerID: 75,
      }
    },
    songlists: {
      1: {
        id: 1,
        songId: 1,
        playlistId: 1,
      },
      2: {
        id: 2,
        songId: 3,
        playlistId: 2,
      },
      3: {
        id: 3,
        songId: 1,
        playlistId: 3,
      },
      4: {
        id: 4,
        songId: 2,
        playlistId: 3,
      },
    },
    users: {
      11: {
        id: 11,
        username: "mintBerry",
        ownedPlaylists: [1, 2],        
      },
      75: {
        id: 75,
        username: "tomIsPetty",
        ownedPlaylists: [3],
      }
    },
    follows: {
      1: {
        id: 1,
        userId: 11,
        playlistId: 3,
      },
      2: {
        id: 2,
        userId: 75,
        playlistId: 1,
      },
      3: {
        id: 3,
        userId: 75,
        playlistId: 2,
      },
    },
    friends: {
      1: {
        id: 1,
        ownerId: 11,
        friendID: 75,
      },
      2: {
        id: 2,
        ownerId: 75,
        friendID: 11,
      },
    },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    songForm: ["Song title cannot be blank"],
  },
  session: { currentUserId: 1 }
}