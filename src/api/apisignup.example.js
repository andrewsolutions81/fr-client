export async function createUser(user) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }

    const response = await fetch(`${BASE_URL}users`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
