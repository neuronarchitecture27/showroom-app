
function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Hosting</h5>
            <p>Airbnb your home</p>
            <p>AirCover for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
        </div>
      
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Support</h5>
            <p>Help Center</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Report a neighborhood concern</p>
        </div>
      

      
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Community</h5>
            <p>Learn about new features</p>
            <p>Letter from our founders</p>
            <p>Careers</p>
            <p>Gift cards</p>
        </div>


    </div>
  )
}

export default Footer