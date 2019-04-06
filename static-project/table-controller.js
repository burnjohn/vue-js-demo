const table = new Vue({
  el: '#tables',
  data() {
    return {
      users: USERS_LIST.map( user => {
        user.isShown = true;
        return user;
      })
    }
  },
  created() {
    EventEmitter.$on('input-change', (value) => {
      this.filterUser(value);
    });
  },
  methods: {
    filterUser(searchValue) {
      if (!this.users || !this.users.length) {
        return;
      }

      this.users.forEach( user => {
        const hasSearchValue = Object.values(user).join(' ').includes(searchValue);

        user.isShown = hasSearchValue;
      });

    }
  },

});