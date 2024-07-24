

export default function getBlogs() {
    try {
      const data = [
        {
          id: 1,
          title: "How do I search for properties on Estatein?",
          desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
        },
        {
          id: 2,
          title: "What documents do I need to sell my property through Estatein?",
          desc: "Find out about the necessary documentation for listing your property with us.",
        },
        {
          id: 3,
          title: "How can I contact an Estatein agent?",
          desc: "Discover the different ways you can get in touch with our experienced agents.",
        },
        {
          id: 4,
          title: "Exceptional Service!",
          desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        },
      ];
      return data;
    } catch (error) {
      return error;
    }
  }