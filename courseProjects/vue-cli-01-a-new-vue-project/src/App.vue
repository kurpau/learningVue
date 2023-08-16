<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :isFavourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          email: "manuel@localhost.com",
          phone: "01234 5678 991",
          isFavourite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          email: "julie@localhost.com",
          phone: "09876 543 221",
          isFavourite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
  },
};
</script>
