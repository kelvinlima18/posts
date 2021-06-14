import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiPower, FiHeart as Love } from 'react-icons/fi';
import { BiLike as Like } from 'react-icons/bi';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  PostCard,
  Post,
  PostReaction,
  InputPost,
} from './styles';

import Input from '../../components/Input';

import logo from '../../assets/segware-header.png';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

interface PostContent {
  id: string;
  content: string;
  likes: string;
  loves: string;
  author: {
    username: string;
  };
  activeUserLikedIt: number;
  activeUserLovedIt: number;
  createdAt: string;
}

const PostsHome: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signOut, username, token } = useAuth();
  const [data, setData] = useState<PostContent[]>([]);
  const [like, setLike] = useState(false);
  const [love, setLove] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      await api
        .get('feeds', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => setData(response.data));
    }

    loadPosts();
  }, [token, data]);

  const handlePost = useCallback(
    async ({ content }) => {
      await api.post(
        'feed',
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      formRef.current?.setFieldValue('content', '');
    },
    [token],
  );

  const handleReactLike = useCallback(
    async id => {
      await api.post(
        'reaction',
        { feedId: id, like },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setLike(!like);
    },

    [token, like],
  );

  const handleReactLove = useCallback(
    async id => {
      await api.post(
        'reaction',
        { feedId: id, love },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setLove(!love);
    },
    [token, love],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Segware" />

          <div className="username">
            <span>Bem-vindo(a),</span>
            <strong>{username}</strong>
          </div>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <h1>Feed</h1>
        <InputPost ref={formRef} onSubmit={handlePost}>
          <Input name="content" placeholder="O que você está pensando hoje?" />
          <button type="submit">+ Postar</button>
        </InputPost>

        {data.map(post => (
          <PostCard key={post.id}>
            <Post>
              <span>{post.author.username}</span>
              <p>{post.content}</p>
            </Post>
            <PostReaction>
              <button type="button" onClick={() => handleReactLike(post.id)}>
                {post.likes >= '1' ? post.likes : null}
                {post.activeUserLikedIt === 1 ? <AiFillLike /> : <Like />}
              </button>
              <button type="button" onClick={() => handleReactLove(post.id)}>
                {post.loves >= '1' ? post.loves : null}
                {post.activeUserLovedIt === 1 ? <AiFillHeart /> : <Love />}
              </button>
            </PostReaction>
          </PostCard>
        ))}
      </Content>
    </Container>
  );
};

export default PostsHome;
