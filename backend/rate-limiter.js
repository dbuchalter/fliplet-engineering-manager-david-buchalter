const rateLimit = new Map(); // Map to track requests per tenant
const REQUEST_LIMIT = 100;
const TIME_WINDOW = 60000; // 60 seconds

function rateLimiter(req, res, next) {
const tenant = req.headers["x-tenant-id"];
if (!tenant || tenant.trim() === "") {
  return res.status(400).json({ error: "Missing tenant ID" });
}

  const currentTime = Date.now();

  if (!rateLimit.has(tenant)) {
    rateLimit.set(tenant, []);
  }

  // Retrieve request timestamps for the tenant
  const timestamps = rateLimit.get(tenant);

  // Remove timestamps outside the time window (sliding window approach)
  while (timestamps.length > 0 && timestamps[0] <= currentTime - TIME_WINDOW) {
    timestamps.shift();
  }

  if (timestamps.length >= REQUEST_LIMIT) {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }

  // Add current request timestamp
  timestamps.push(currentTime);

  // Cleanup memory: Remove stale tenants to prevent memory bloat
  if (timestamps.length === 0) {
    rateLimit.delete(tenant);
  }

  next();
}

module.exports = rateLimiter;