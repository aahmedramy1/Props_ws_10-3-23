import ProfileCard from "./components/ProfileCard";

const App = () => {
  const profileCardData = [
    { id: 1, title: 'Ahmed', description: 'This is a description' },
    { id: 2, title: "Mohamed", description: "Thr" },
    { id: 3, title: "Ali", description: "This is not description" },
  ]

  return (<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
    {
      profileCardData.map(profile => <ProfileCard key={profile.id} title={profile.title} description={profile.description} />)
    }
  </div>)
}

export default App;