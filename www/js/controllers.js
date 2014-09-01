angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
                  // Form data for the login modal
                  $scope.loginData = {
                  };

                  // Create the login modal that we will use later
                  $ionicModal.fromTemplateUrl('templates/login.html', { scope: $scope })
                      .then(function (modal) {
                              $scope.modal = modal;
                            });

                  // Triggered in the login modal to close it
                  $scope.closeLogin = function () {
                    $scope.modal.hide();
                  };

                  // Open the login modal
                  $scope.login = function () {
                    $scope.modal.show();
                  };

                  // Perform the login action when the user submits the login form
                  $scope.doLogin = function () {
                    console.log('Doing login', $scope.loginData);

                    // Simulate a login delay. Remove this and replace with your login
                    // code if using a login system
                    $timeout(function () {
                      $scope.closeLogin();
                    }, 1000);
                  };
                })

    .controller('PlaylistsCtrl', function ($scope) {
                  $scope.playlists = [
                    { title: 'Reggae', id: 1 },
                    { title: 'Chill', id: 2 },
                    { title: 'Dubstep', id: 3 },
                    { title: 'Indie', id: 4 },
                    { title: 'Rap', id: 5 },
                    { title: 'Cowbell', id: 6 }
                  ];
                })

    .controller('NewsCtrl', ['FeedService', '$scope', function (Feed, $scope) {
                  /*
                   author: ""
                   categories: Array[1]
                               // 'Blog'
                               // 'Tweet'
                               // 'Vimeo'
                               // 'Diigo'
                               // 'Facebook'
                   content: "RT @startup_br: .@Superplayer, acelerada pela @21212com, recebe investimento da @Movile http://t.co/Zbsmw0KFyz"
                   contentSnippet: "RT @startup_br: .@Superplayer, acelerada pela @21212com, recebe investimento da @Movile http://t.co/Zbsmw0KFyz"
                   link: "https://twitter.com/21212com/status/506485371455430656"
                   publishedDate: "Mon, 01 Sep 2014 09:54:57 -0700"
                   title: "Tweet"
                   */
                  // WIP: http://learn.ionicframework.com/formulas/infinite-lists/
                  Feed.parseFeed('http://news.21212.com/').then(function (res) {
                    $scope.news = _(res.data.responseData.feed.entries)
                        .map(function (e, index) { return {title: e.contentSnippet, id: index + 1, category: e.categories[0]}; })
                        .value();
                  });
                }])

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
                })

;
