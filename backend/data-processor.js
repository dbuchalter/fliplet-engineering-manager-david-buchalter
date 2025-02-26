// Mock API to fetch missing data
async function fetchUserData(id) {
  return { email: `user${id}@email.com`  };
}

// Optimised Data Processor
async function processUsers(users) {
  const uniqueUsers = new Map();
  const missingEmails = [];

  for (const user of users) {
    const key = `${user.name}-${user.email}`;
    if (!uniqueUsers.has(key)) {
      uniqueUsers.set(key, user);
      if (!user.email) {
        missingEmails.push(user);
      }
    }
  }

  // Process missing emails in batches for better efficiency
  const batchSize = 10;
  for (let i = 0; i < missingEmails.length; i += batchSize) {
    const batch = missingEmails.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async (user) => {
        try {
          const enriched = await fetchUserData(user.id);
          user.email = enriched.email;
        } catch (error) {
          console.error(`Failed to fetch data for user ID: ${user.id}`, error);
        }
      })
    );
  }

  return Array.from(uniqueUsers.values());
}

module.exports = processUsers;
