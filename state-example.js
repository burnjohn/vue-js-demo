const chatRooms = {
  'friends': {
    users: [],
    messages: [],
    files: []
  }
};


const createChat = () => {
  const state = {
    users: [],
    messages: [],
    files: []
  };

  const addUser = (userName) => {
    const currentUsersList = state.users;

    state.users = [...currentUsersList, userName];
  };

  const getAllUsers = () => state.users;
  const getAllMessages = () => state.messages;

  const sendMessage = (message) => {
    const currentMessagesList = state.messages;

    state.messages = [...currentMessagesList, message];
  };

  const deleteUser = (userName) => {
    const currentUsersList = state.users;

    state.users = currentUsersList.filter( name => name !== userName);
  };


  return {
    addUser,
    sendMessage,
    deleteUser,
    getAllUsers,
    getAllMessages
  };
};

const chat = createChat();

// chat.addUser('Bob');
//
// chat.sendMessage('I\'m here!');
//
// chat.deleteUser('Bob');
//
// chat.getAllUsers();
//
// chat.getAllMessage();