const Footer = () => {

  const today = new Date();
  
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-10">
    <h1>Team Member Allocation App - {today.getFullYear()}</h1>
          </div>
          </div>
      </header>
  )
}

export default Footer;