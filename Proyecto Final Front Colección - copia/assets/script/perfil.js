/* General Styles */
    body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f5f5f5;
  }
  
  /* Header */
.header{
    background-color; #fff;
    padding: 15px;
    box-shadow; 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
.header h1 {
    font-size: 1.5rem;
    color: #555;
  }
  
.header nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  .header nav ul li a {
    text-decoration: none;
    color: #777;
    transition: color 0.3s;
  }
  
  .header nav ul li a:hover {
    color: #000;
  }
  
  /* Sections */
  .section {
    padding: 20px;
    margin: 20px auto;
    max-width: 900px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Calendario */
  #calendar {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #a7a9b2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #555;
  }
  
  /* Lists */
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  ul li:last-child {
    border-bottom: none;
  }
  
    /* Responsive */
  @media (max-width: 768px) {
    .header h1 {
      font-size: 1.2rem;
    }
  
    .header nav ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  
    .section {
      padding: 10px;
    }
  }
  