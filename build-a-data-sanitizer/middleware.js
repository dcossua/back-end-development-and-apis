function inputCleaner(req, res, next) {
  if (req.body) {
    // Lowercase the username only
    if (typeof req.body.username === 'string') {
      req.body.username = req.body.username.toLowerCase();
    }

    // Strip HTML tags from the comment
    if (typeof req.body.comment === 'string') {
      req.body.comment = req.body.comment.replace(/<[^>]*>?/gm, '');
    }
  }

  next();
}

function inputValidator(req, res, next) {
  const username = req.body?.username;

  if (typeof username === 'string' && username.length >= 3) {
    return next();
  }

  res.redirect('/form?error=' + encodeURIComponent('Username must be at least 3 characters.'));
}

export { inputCleaner, inputValidator };