import react from "react";

const Client = ({ loading, clients }) => {
    return loading ? (
        <img src="https://acegif.com/wp-content/uploads/loading-31.gif" alt="Loading..." className="loader"/>
        
    ) : (
               // Fetched Page


        <div>
            <div id="page">
                <div className="row">
                    {clients.map((person) => (
                        <div className="col-sm-4 col-md-6 col-lg-4">
                            <div className="grid">
                                <div className="component">
                                    <div className="user">
                                        <img src={person.avatar} alt={person.avatar}></img>
                                        <h1 className="user-name"> {person.first_name} {person.last_name}</h1>
                                        <p className="user-email">{person.email}</p>
                                        <p className="user-id">ID: {person.id}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
       </div>
    );
    
};



export default Client;