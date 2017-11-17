require 'rails_helper'

RSpec.describe FetchComics do

  context 'when a vote is given' do

    context 'and the ComicVote already exists' do 

      before do
        ComicVote.create(comic_id: 123, votes: 0)
      end

      it 'increases votes amount' do
        comic_votes = ComicVote.find_by(comic_id: 123)
        expect(comic_votes.votes).not_to be_nil
      end
    end

    context 'and the ComicVote does not already exist' do
      it 'creates a new ComicVote and increases the vote count' do
        expect { UpVote.perform(123) }.to change(ComicVote, :count).by(1)
      end
    end

  end
end
