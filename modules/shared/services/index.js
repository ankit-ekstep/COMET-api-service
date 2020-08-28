module.exports = {
    apiDocsSubscriberService: require('./apiDocsSubscriber'),
    apiKeyService: require('./apiKey'),
    articleService: require('./article'),
    authService: require('./auth'),
    commentService: require('./comment'),
    emailService: require('./email')(),
    folderService: require('./folder'),
    noiseCancellationVideoService: require('./noiseCancellationVideo'),
    notificationService: require('./notification'),
    organizationService: require('./organization'),
    socketConnectionService: require('./socketConnection'),
    subtitlesService: require('./subtitles'),
    translationService: require('./translation'),
    translationExportService: require('./translationExport'),
    userService: require('./user'),
    videoService: require('./video'),
    videoTutorialContributionService: require('./videoTutorialContribution'),
    websocketsService: require('./websockets'),
    storageService: require('./storage'),
    textToSpeechService: require('./textToSpeech'),
}