angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopover) {

    $scope.user = {
        avatar: 'http://www.gravatar.com/avatar/7e6af66d57801c031359233b5756e884.png',
        name: 'Anthanh Pham Trinh',
        city: 'Mordor City'
    };

    $scope.toggleLeftSideMenu = function() {
        console.log('sidemenuL');
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.toggleRightSideMenu = function() {
        console.log('sidemenuR');
    };

    $scope.showActionsMenu = function($event) {
        this.showPopover($event);
    };

    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.showPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.hidePopover = function() {
        $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action
    });

})

.controller('LoginCtrl', function($scope, $state) {
    $scope.login = function() {
        console.log('LOG!');
        $state.go('tab.dash');
    };
})

.controller('DashCtrl', function($scope) {
    $scope.log = function() {
        console.log('LOG!');
    };
})

.controller('ChatsCtrl', function($scope, Chats, $timeout) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }

    $scope.doRefresh = function() {
        $timeout(function() {
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
