# frozen_string_literal: true

class BooksController < ApplicationController
  def new
    @book = Book.new
  end

  def create
    book = Book.new(book_params)
    if book.save
      flash[:notice] = 'Book created succesfully!'
      redirect_to books_path
    else
      flash.now[:notice] = 'Could not create a book, sorry.'
      render 'new'
    end
  end

  def index
    @books = Book.all
  end

  private

  def book_params
    params.require(:book).permit(:title, :description, :rating)
  end
end