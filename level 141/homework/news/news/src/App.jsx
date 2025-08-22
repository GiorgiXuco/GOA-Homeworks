import React from "react";

export default function App() {
  const styles = {
    container: { maxWidth: 800, margin: "0 auto", padding: 20, fontFamily: "Arial" },
    header: { textAlign: "center", padding: 10, background: "#0f172a", color: "#fff" },
    article: { border: "1px solid #ccc", borderRadius: 8, padding: 16, marginBottom: 16 },
    img: { width: "100%", borderRadius: 8 },
    title: { margin: "10px 0" },
    footer: { marginTop: 20, padding: 10, textAlign: "center", background: "#0f172a", color: "#fff" }
  };

  const news = [
    {
      id: 1,
      title: "SpaceX გაშვება წარმატებით დასრულდა",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////8/PwEBAT5+fkICAjIyMiysrLv7+8ODg6lpaW+vr729vagoKBiYmJZWVnh4eEZGRmSkpItLS02NjYUFBQkJCTS0tJERESHh4dxcXHd3d3Pz8+YmJhOTk4fHx9/f389PT3CwsI1NTVSUlIrKyuBgYFtbW033VnJAAAEe0lEQVR4nO3Zh3LiShAF0AlKCIGECApkjP3+/w9fd88Is4ZNLlfhYe8pbwBpq+ZWT16lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgANbSr8vf5YO9PHtQm74UZ5JQ12ni0Yh+RvGjGvWlpGzecjV/mR938/1sueSQT1FCb7Q4H/J0Mi13x9Xy0Y35NHv918uHUdmlSdWMt/3xZ28Hw3KHdD9iX9Zpkpks2U5XIea5ZV1G9lJ24yYzpkrfziv/9DlCEtv2+SbTWlfjrvSpniacUscubTSjnjkavrSyVoSZ0l6Xp+3STNJVaT/6xT8KjB94L31eRZzOrPPpTD1Vv+SB9zZ2xYuqlPsm98onWsyPXVNQ6ShfkU4lVvw+pQbJreU+QTtZS9fUOkt6/zj4Hir1kR3zccvxTGRo8NWvj27XV5L6LfqqkHhGZ6dy+VQLOicpeWoxhLpnvVBuSn2OoxCLa+mdkq/5/qPP2ntNsze9zg4hyjGNOy3xorRVKojS9Uly2iTeqZckH9vt8s4OjdQuotU9y1sVzLrw5hZsJ8qXdxrOn+fbyvXOSJssP6qf9YBvRqK06/eExjRHdac08zyj7knhqIAF57O0cQkiogu55bYbqSGFfPvh7oj/OKby3BUwX/mv7fedYG5NK547CpdSj18leOxvAtvUlY/i0eZs/ui2fopVLydd8AbFqf5Tl2HWSv+kJwX9fto9uqmfxGeBjvpg4WYbKtd2RvHopPAq+Qp5ZmT9GyobFpk9z5Ufi5prWcuDmncvMoNSzHok84sKMOAgdXtNGm+V7FYOGad1+UyqAk7mUPMPUSTVmuzpc7mR+rkdTFOqe4tIWLj/7SoqIKdRi7TwHZTGZUbDkgOGsEf7BUpAU0tabPlD744PmiaYQjd+BxMHnjC2Mk3yer5I3vuniQ7yOIz9y2+5obaN5OrFJUwWYW1efof64a6hkecuB6mANV9+BrIB/ROUoy78+ZYjZlP6cvFMtxRqteEV0JWQNqh8vZsX6ROMwtgfJg6RvgxBE/GyL0erqnXvBExOe2qfuvsztzld8y77UMiZIutU2Cu+C3hu3B7NTTInOibtcyM1pZDUYeOQeyp30YOckoYiTujbxToyBZew4K1qG+ya4SeRiYw+7WaZ4sDfL/Nh0pH1v/Ovh8bdO80TN3tyySJTlf7htLoemclc2QB3bjQEY7VbD7XiPE3rHo2smo/d7YWWOyhOHl5CnmPKjO8ohrvsZqX8KULO/oUPL9ds9YNb+xkUoqSmR5fjfXLZwsh9oTqv9WWTGunN7MHt/St0WuIo3dVtqdHph3fojXzoqfxCMfWLfwhTjlsGJ8MSKOf7/ONLnIZOi9H7aWPCXTiEfP7UnvujklsSJjdtl57abq7OU7oJ506R6lPTMT5yt2nUFSe3/+0Uy/1aPHHv8GpidNY/qMGfEP8wcdi7m887HXIW9A4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5R/wP0vCP9Mo/ZLgAAAABJRU5ErkJggg==",
      text: "კოსმოსური ხომალდი წარმატებით გავიდა ორბიტაზე."
    },
    {
      id: 2,
      title: "ახალი AI მოდელი უფრო ეფექტურია",
      img: "https://picsum.photos/seed/ai/600/300",
      text: "ინოვაციურმა მოდელმა ენერგომოხმარება 30%-ით შეამცირა."
    },
    {
      id: 3,
      title: "მარსის ახალი ფოტოები ნასასგან",
      img: "data:image/jpeg;base64,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",
      text: "დრონმა გადაიღო მტვრის ტორნადოები მარსის ზედაპირზე."
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Tech & Space News</h1>
        <p>უახლესი სტატიები ტექნოლოგიებსა და კოსმოსზე</p>
      </header>

      {news.map((n) => (
        <article key={n.id} style={styles.article}>
          <img src={n.img} alt={n.title} style={styles.img} />
          <h2 style={styles.title}>{n.title}</h2>
          <p>{n.text}</p>
        </article>
      ))}

      <footer style={styles.footer}>
        <p>© 2025 Tech & Space News</p>
      </footer>
    </div>
  );
}
