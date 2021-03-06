const listHelper = require('../utils/list_helper');

// test('dummy returns one', () => {
//   const blogs = [];

//   const result = listHelper.dummy(blogs);
//   expect(result).toBe(1);
// });

describe('BLOGS TESTING', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
  ];

  const blogs = [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0,
    },
    {
      _id: '5a422b891b54a676234d17fa',
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
      likes: 10,
      __v: 0,
    },
    {
      _id: '5a422ba71b54a676234d17fb',
      title: 'TDD harms architecture',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
      likes: 0,
      __v: 0,
    },
    {
      _id: '5a422bc61b54a676234d17fc',
      title: 'Type wars',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 2,
      __v: 0,
    },
  ];
  describe('Total likes', () => {
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog);
      expect(result).toBe(5);
    });

    test('when list has more than one blog, proper amount of like is returned', () => {
      const result = listHelper.totalLikes(blogs);
      expect(result).toBe(36);
    });
  });

  describe('Favourite blog', () => {
    test('when list has only one blog-it will be favourite', () => {
      const result = listHelper.favouriteBlog(listWithOneBlog);
      expect(result).toEqual(listWithOneBlog[0]);
    });

    test('with list of multiple blogs it is the one with most likes', () => {
      const result = listHelper.favouriteBlog(blogs);
      expect(result).toEqual({
        _id: '5a422b3a1b54a676234d17f9',
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
        likes: 12,
        __v: 0,
      });
    });
  });

  describe('Most blogs', () => {
    test('in list of 1 blog - author of this blog has the most blogs', () => {
      const result = listHelper.mostBlogs(listWithOneBlog);
      expect(result).toEqual({
        author: 'Edsger W. Dijkstra',
        blogs: 1,
      });
    });
    test('in list of multiple blogs, author with most blogs is returned', () => {
      const result = listHelper.mostBlogs(blogs);
      expect(result).toEqual({ author: 'Robert C. Martin', blogs: 3 });
    });
  });

  describe('Most likes', () => {
    test('in list of 1 blog - author of this blog has the most likes', () => {
      const result = listHelper.mostLikes(listWithOneBlog);
      expect(result).toEqual({
        author: 'Edsger W. Dijkstra',
        likes: 5,
      });
    });

    test('in list of multiple blogs, author with most likes is returned', () => {
      const result = listHelper.mostLikes(blogs);
      expect(result).toEqual({
        author: 'Edsger W. Dijkstra',
        likes: 17,
      });
    });
  });
});
