import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerAuthor = {
  readonly id: string;
  readonly name_name?: string | null;
  readonly avatar?: string | null;
  readonly age?: number | null;
  readonly Blogs?: (Blog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthor = {
  readonly id: string;
  readonly name_name?: string | null;
  readonly avatar?: string | null;
  readonly age?: number | null;
  readonly Blogs: AsyncCollection<Blog>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Author = LazyLoading extends LazyLoadingDisabled ? EagerAuthor : LazyAuthor

export declare const Author: (new (init: ModelInit<Author, AuthorMetaData>) => Author) & {
  copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}

type EagerBlog = {
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly author_name?: string | null;
  readonly created_day?: string | null;
  readonly picture?: string | null;
  readonly authorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly author_name?: string | null;
  readonly created_day?: string | null;
  readonly picture?: string | null;
  readonly authorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog, BlogMetaData>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}