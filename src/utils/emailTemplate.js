const EMAILTEMPLATE = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #000000;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
        .container {
            max-width: 60%;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333333;
        }
        p {
            color: #666666;
        }
        button {
            background-color: #000000;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none; /* Eliminar subrayado de enlace */
            display: inline-block;
        }
        a {
            color: white; /* Color del texto del enlace */
            text-decoration: none; /* Eliminar subrayado de enlace */
        }

        img {
            width: 300px;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Account Confirmation</h1>
        <p>Hello ${name},</p>
        <img src="https://media.giphy.com/media/FIZ1QC610AAhi/giphy.gif" alt="Animated GIF">

        <p>Thank you for creating an account with AnimeApp. Please click the button below to confirm your account:</p>
        <a href="http://localhost:5173/" target="_blank">
            <button>Confirm Account</button>
        </a>
    </div>
</body>
</html>
`;

module.exports = { EMAILTEMPLATE };
