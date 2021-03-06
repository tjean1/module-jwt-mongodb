module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' };

    if (err.message.includes('pseudo')) {
        errors.pseudo = 'Pseudo incorrect ou déja pris';
    }

    if (err.message.includes('email')) {
        errors.email = 'Email incorrect';
    }

    if (err.message.includes('password')) {
        errors.password = 'Le mot de passe doit faire 6 caractères minimun';
    }

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo')) {
        errors.pseudo = 'Ce pseudo est déjà enregistré';
    }

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')) {
        errors.email = 'Cet email est déjà enregistré';
    }

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' };

    if (err.message.includes('email')) {
        errors.email = 'Email incorrect';
    }

    if (err.message.includes('password')) {
        errors.password = 'Mot de passe incorrect';
    }

    return errors;
};