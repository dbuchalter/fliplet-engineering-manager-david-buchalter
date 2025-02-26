const processUsers = require("./data-processor");

describe("processUsers Function", () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@email.com" },
    { id: 2, name: "Bob", email: null },
    { id: 3, name: "Charlie", email: null },
  ];

  test("should return unique users", async () => {
    const processedUsers = await processUsers(users);
    expect(processedUsers.length).toBe(3);
  });

  test("should enrich missing emails", async () => {
    const processedUsers = await processUsers(users);
    const missingEmails = processedUsers.filter(user => !user.email);
    expect(missingEmails.length).toBe(0);
  });

  test("should process a million users efficiently", async () => {
    const largeUsers = Array.from({ length: 1000000 }, (_, i) => ({
      id: i + 1,
      name: `User${i + 1}`,
      email: (i + 1) % 2 === 0 ? null : `user${i + 1}@example.com`,
    }));

    console.time("MillionUsersTest");
    const result = await processUsers(largeUsers);
    console.timeEnd("MillionUsersTest");

    expect(result.length).toBe(1000000);
    expect(result.every(user => user.email)).toBeTruthy();
  });

  test("should handle duplicate names with different emails", async () => {
    const duplicateUsers = [
      { id: 1, name: "Alice", email: "alice1@example.com" },
      { id: 2, name: "Alice", email: "alice2@example.com" },
      { id: 3, name: "Bob", email: null },
    ];

    const processedUsers = await processUsers(duplicateUsers);
    expect(processedUsers.length).toBe(3);
  });

  test("should handle users with no missing emails", async () => {
    const allEmails = [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
      { id: 3, name: "Charlie", email: "charlie@example.com" },
    ];

    const processedUsers = await processUsers(allEmails);
    expect(processedUsers.length).toBe(3);
    expect(processedUsers.every(user => user.email)).toBeTruthy();
  });
});
