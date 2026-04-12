export async function getLatestCommit() {
  try {
    const res = await fetch(`https://api.github.com/users/mmesomasaint/events`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    // Ensure data is an array before processing
    if (!Array.isArray(data)) {
      console.error("GitHub API Error:", data);
      return { repo: "OFFLINE", message: "System standby", time: null };
    }

    const pushEvent = data.find((event: any) => event.type === 'PushEvent');
    
    return {
      repo: pushEvent?.repo.name.split('/')[1] || "SYSTEM_IDLE",
      message: pushEvent?.payload.commits[0].message || "No recent activity",
      time: pushEvent?.created_at,
    };
  } catch (error) {
    return { repo: "ERROR", message: "Connection failed", time: null };
  }
}