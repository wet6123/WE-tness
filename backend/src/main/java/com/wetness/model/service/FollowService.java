package com.wetness.model.service;

import com.wetness.model.dto.response.FollowUserResDto;

public interface FollowService {

    boolean removeFollow(String followerNickname, String followingNickname);

    boolean registerFollow(String followerNickname, String followingNickname);

    FollowUserResDto getFollowers(Long followerId);
}
