import { Component } from "vue"
export default {
  /**
   * Settings for the about page template
   */
  about: {
    // team: {
    //   pretitle: "Meet the Minds",
    //   title: `The Team`,
    //   members: [
    //     {
    //       _item: "member_1",
    //       photo: require("./img/member1.jpg"),
    //       title: "Co-Founder",
    //       name: "Zeno Elea",
    //       content:
    //         "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"
    //     },
    //     {
    //       _item: "member_2",
    //       photo: require("./img/member2.jpg"),
    //       title: "Co-Founder",
    //       name: "Zeno Elea",
    //       content:
    //         "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"
    //     },
    //     {
    //       _item: "member_3",
    //       photo: require("./img/member3.jpg"),
    //       title: "Managing Partner",
    //       name: "Zeno Elea",
    //       content:
    //         "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"
    //     },
    //     {
    //       _item: "member_4",
    //       photo: require("./img/member4.jpg"),
    //       title: "Managing Partner",
    //       name: "Zeno Elea",
    //       content:
    //         "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"
    //     },
    //     {
    //       _item: "member_5",
    //       photo: require("./img/member5.jpg"),
    //       title: "Managing Partner",
    //       name: "Zeno Elea",
    //       content:
    //         "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"
    //     },
    //     {
    //       _item: "member_6",
    //       photo: require("./img/member6.jpg"),
    //       title: "Managing Partner",
    //       name: "Zeno Elea",
    //       content:
    //         "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"
    //     }
    //   ]
    // },
    profile: {
      pretitle: "Meet Us",
      title: `Leadership`,
      photo: require("./img/member1.jpg"),
      position: "Founder",
      name: "Zeno Elea",
      content:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    location: {
      pretitle: "United States",
      title: `Based in music city; Nashville, Tennessee.`,
      map: require("./img/nashville-map.svg"),
      photo1: require("./img/location1.jpg"),
      photo2: require("./img/location2.jpg"),
    }
  }
}
