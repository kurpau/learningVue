export default {
  registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    fetch(
      `https://vue-http-demo-13a9e-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'POST',
      }
    );

    context.commit('registerCoach', coachData);
  },
};
