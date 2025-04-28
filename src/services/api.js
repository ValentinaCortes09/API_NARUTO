// The original Heroku API might be down, let's update to use a mock API first
// and then you can replace with a working Naruto API later
const API_BASE_URL = 'https://naruto-api.herokuapp.com/api/v1';

// Mock data to use as fallback if the API is unavailable
const MOCK_CHARACTERS = [
  { id: 1, name: 'Naruto Uzumaki', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Naruto' },
  { id: 2, name: 'Sasuke Uchiha', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Sasuke' },
  { id: 3, name: 'Sakura Haruno', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Sakura' },
  { id: 4, name: 'Kakashi Hatake', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Kakashi' },
  { id: 5, name: 'Itachi Uchiha', village: 'Akatsuki', image: 'https://via.placeholder.com/150?text=Itachi' }
];

const MOCK_TEAMS = [
  { id: 1, name: 'Team 7', members: [1, 2, 3, 4] },
  { id: 2, name: 'Akatsuki', members: [5] }
];

const MOCK_VILLAINS = [
  { id: 1, name: 'Orochimaru', village: 'Sound', image: 'https://via.placeholder.com/150?text=Orochimaru' },
  { id: 2, name: 'Pain', village: 'Akatsuki', image: 'https://via.placeholder.com/150?text=Pain' }
];

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/characters`);
    if (!response.ok) {
      console.warn('API unavailable, using mock data');
      return MOCK_CHARACTERS;
    }
    return await response.json();
  } catch (error) {
    console.error('Error en fetchCharacters:', error);
    console.warn('Using mock data instead');
    return MOCK_CHARACTERS;
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/characters/${id}`);
    if (!response.ok) {
      console.warn('API unavailable, using mock data');
      return MOCK_CHARACTERS.find(char => char.id === Number(id)) || null;
    }
    return await response.json();
  } catch (error) {
    console.error('Error en fetchCharacterById:', error);
    console.warn('Using mock data instead');
    return MOCK_CHARACTERS.find(char => char.id === Number(id)) || null;
  }
};

export const fetchTeams = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/teams`);
    if (!response.ok) {
      console.warn('API unavailable, using mock data');
      return MOCK_TEAMS;
    }
    return await response.json();
  } catch (error) {
    console.error('Error en fetchTeams:', error);
    console.warn('Using mock data instead');
    return MOCK_TEAMS;
  }
};

export const fetchVillains = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/villains`);
    if (!response.ok) {
      console.warn('API unavailable, using mock data');
      return MOCK_VILLAINS;
    }
    return await response.json();
  } catch (error) {
    console.error('Error en fetchVillains:', error);
    console.warn('Using mock data instead');
    return MOCK_VILLAINS;
  }
};